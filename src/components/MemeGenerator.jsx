import React, { Component } from 'react'
import TrollFace from '../troll-face-2.png'

class MemeGenerator extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: TrollFace,
            allMemeImgs: [],
            memeDetails: ""
        }
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(json => {
                const { memes } = json.data
                this.setState({
                    allMemeImgs: memes
                })
            })
            .catch(err => console.log("Caught Error:", err))
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick(event) {
        event.preventDefault();
        const randomNumber = Math.round(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randomNumber].url;
        this.setState({
            randomImg: randMemeImg,
            memeDetails: this.state.allMemeImgs[randomNumber]
        })
    }

    render() {
        return (
            <div className="application-body">
                <div className="header-section" >
                    <h1>Meme Generator</h1>
                </div >
                <div className="wrapper">
                    <form className='meme-form'>
                        <input
                            type='text'
                            name='topText'
                            value={this.state.topText}
                            placeholder='Enter text to show on top'
                            onChange={this.handleChange}
                        />

                        <input
                            type='text'
                            name='bottomText'
                            value={this.state.bottomText}
                            placeholder='Enter text to show at bottom'
                            onChange={this.handleChange}
                        />

                        <button onClick={this.handleClick}>Generate Meme</button>
                    </form>
                    <div className='meme'>
                        <img src={this.state.randomImg} alt='' />
                        <h2 className='top'>{this.state.topText}</h2>
                        <h2 className='bottom'>{this.state.bottomText}</h2>
                    </div>
                </div>
                <div className="footer-section" >
                    <p>{this.state.memeDetails.id}</p>
                    <p>{this.state.memeDetails.name}</p>
                </div>
            </div>
        )
    }
}

export default MemeGenerator