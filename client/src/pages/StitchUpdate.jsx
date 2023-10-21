import Component from 'react'
import api from '../api'

class StitchUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            difficulty: '',
            image: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputDifficulty = async event => {
        const difficulty = event.target.validity.valid
            ? event.target.value
            : this.state.difficulty

        this.setState({ difficulty })
    }

    handleChangeInputImage = async event => {
        const Image = event.target.value
        this.setState({ Image })
    }

    handleUpdateStitch = async () => {
        const { id, name, difficulty, image } = this.state
        const payload = { name, difficulty, image }

        await api.updateStitchById(id, payload).then(res => {
            window.alert(`Stitch updated successfully`)
            this.setState({
                name: '',
                difficulty: '',
                image: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const stitch = await api.getStitchById(id)

        this.setState({
            name: stitch.data.data.name,
            difficulty: stitch.data.data.difficulty,
            image: stitch.data.data.image,
        })
    }

    /*
    render() {
        const { name, difficulty, image } = this.state
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Difficulty: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="0"
                    max="5"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={difficulty}
                    onChange={this.handleChangeInputDifficulty}
                />

                <Label>Image: </Label>
                <InputText
                    type="text"
                    value={image}
                    onChange={this.handleChangeInputImage}
                />

                <Button onClick={this.handleUpdateStitch}>Update Stitch</Button>
                <CancelButton href={'/stitches/glossary'}>Cancel</CancelButton>
            </Wrapper>
        )
    }*/
}

export default StitchUpdate