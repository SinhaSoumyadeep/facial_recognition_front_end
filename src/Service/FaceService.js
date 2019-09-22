import axios from 'axios'
const addUrl = "http://127.0.0.1:8000/blog/match/"
const uploadUrl = "http://127.0.0.1:8000/blog/upload/"

let _singleton = Symbol();


class FaceService {


    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }


    createFaces(course) {
        return fetch(addUrl, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            console.log(response)
            return response.json();
        })
    }

    upload(selectedFile) {
        const fd = new FormData();
        fd.append('image', selectedFile,  selectedFile.name)
        return axios.post(uploadUrl, fd).then(res => { console.log(res); return res.data})
    }

    loadFaces() {
        return fetch(addUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            return response.json();
        })
    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new FaceService(_singleton);
        return this[_singleton]
    }



}


export default FaceService;