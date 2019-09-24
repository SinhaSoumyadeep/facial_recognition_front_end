import React from 'react'
import FaceService from "../Service/FaceService";
import '../CSS/jazz.css'
import slytherin from '../Images/slytherin.gif'


export default class Home extends React.Component {

    constructor() {
        super();
        this.createModule = this.createModule.bind(this);
        this.fs = FaceService.instance;
        this.state = {
            match: slytherin,
            matchini: slytherin,
            face: null,
        };
    }

    componentDidMount() {

        this.loadCelebrityEncodings()

    }

    loadCelebrityEncodings() {
        this.fs.loadFaces().then((res) => {
            console.log(res)
        })

    }

    createModule(res) {

        this.fs.createFaces(res).then((res) => {
            this.setState({
                match: "https://facial-rec-1992-known-bucket.s3.amazonaws.com/" + res.url,
                dist: res.distance
            })
        })

    }



    fileSelectedHandler = event => {
        this.setState({
            face: event.target.files[0],
            matchini: URL.createObjectURL(event.target.files[0])
        })
        this.fs.upload(event.target.files[0]).then((res) => {
            this.createModule(res)
        })

    }

    render() {

        return (

            <div>
                <div className={"container-fluid"}>
                    <h1> Celebrity Twin</h1>

                    <div className={"flip-card"}>
                        <div className={"flip-card-inner"}>
                            <div className={"flip-card-front"}>
                                <div className={"card"} style={{width: "18rem"}}>
                                    <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler}
                                           ref={(fileInput) => {this.fileInput = fileInput;}}/>
                                    <img className={"card-img-top"} src={this.state.matchini} style={{height: "300px", width: "286px"}} onClick={() => this.fileInput.click()}/>
                                </div>
                            </div>
                            <div className={"flip-card-back"}>
                                <div className={"card"} style={{width: "18rem"}}>
                                    <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler}
                                           ref={fileInput => this.fileInput = fileInput}/>
                                    <img className={"card-img-top"} src={this.state.match} style={{height: "300px", width: "286px"}} onClick={() => this.fileInput.click()}/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        )


    }

}