import React from 'react'
import FaceService from "../Service/FaceService";
import '../CSS/jazz.css'
import slytherin from '../Images/slytherin.gif'


export default class Home extends React.Component {

    constructor() {
        super();
        this.createModule = this.createModule.bind(this);
        this.upload = this.upload.bind(this);
        this.fs = FaceService.instance;
        this.state = {
            match: slytherin,
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

    upload() {

        this.fs.upload(this.state.face).then((res) => {
            this.createModule(res)
        })


    }

    fileSelectedHandler = event => {
        this.setState({
            face: event.target.files[0],
            match: URL.createObjectURL(event.target.files[0])
        })
        console.log(event.target.files[0])
    }

    render() {
        let image;
        if (this.state.match != null) {
            image = <div className={"card"} style={{width: "18rem"}}>
                <img className={"card-img-top"} src={this.state.match} style={{height: "300px", width: "286px"}}/>
                {/*<div className={"card-body"}>*/}
                {/*    <p className={"card-text"}>{this.state.dist}</p>*/}
                {/*</div>*/}
            </div>
        } else {

        }


        return (

            <div>
                <div className={"container-fluid"}>
                    <h1> Celebrity Twin</h1>
                    <div className={"mirror"}>
                        {image}
                        <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler}
                               ref={fileInput => this.fileInput = fileInput}/>
                        <div className={"buttonPicker"}>
                            <button style={{width: "137px"}} type="button" className="btn btn-success"
                                    onClick={() => this.fileInput.click()}>Pick
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button style={{width: "137px"}} type="button" className="btn btn-success"
                                    onClick={this.upload}>Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        )


    }

}