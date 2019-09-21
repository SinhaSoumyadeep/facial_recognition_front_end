
const addUrl = "http://127.0.0.1:8000/blog/"

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


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new FaceService(_singleton);
        return this[_singleton]
    }



}


export default FaceService;