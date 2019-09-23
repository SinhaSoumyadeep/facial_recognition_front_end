import React from 'react'
import FaceService from "../Service/FaceService";


export default class Home extends React.Component
{

    constructor() {
        super();
        this.createModule = this.createModule.bind(this);
        this.upload = this.upload.bind(this);
        this.fs = FaceService.instance;
        this.state = {
            match: "hrithik.jpeg",
            face: null

        };
    }

    componentDidMount() {

        this.loadCelebrityEncodings()

    }

    loadCelebrityEncodings(){
        this.fs.loadFaces().then((res)=>{console.log(res)})

    }

    createModule(res) {

        this.fs.createFaces(res).then((res)=>{this.setState({ match:  res.url , dist: res.distance})})

    }

    upload() {

        this.fs.upload(this.state.face).then((res)=>{this.createModule(res) })



    }

    fileSelectedHandler = event => {
        this.setState({
            face: event.target.files[0],
            preview: URL.createObjectURL(event.target.files[0])
        })
        console.log(event.target.files[0])
    }

    render(){

        return(

            <div>
                <h1> Celebrity Twin</h1>
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={this.upload}>
                    upload
                </button>
                <h1>{this.state.dist}</h1>
                <img src={this.state.preview} style={{height: "300px", width: "300px"}}/>
                &nbsp;&nbsp;&nbsp;
                <img src={"https://facial-rec-1992-known-bucket.s3.amazonaws.com/"+this.state.match} style={{height: "300px", width: "300px"}}/>
                <h1> my name is soumyadeep</h1>
            </div>


        )


    }

}