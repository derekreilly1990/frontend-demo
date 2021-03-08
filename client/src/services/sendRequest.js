export default function sendRequest(path, options = {}) {

    fetch(path)
        .then((response) => response.json())
        .then((data) => {
            console.log('This is your data', data)
            if (data.error) {
                throw new Error(data.error);
            }
            return data
        });

}