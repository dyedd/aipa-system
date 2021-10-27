/**
 * @param file type: File, commonly read from input tag
 * @return url type: string
 */
export function uploadFile(file) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    return new Promise(resolve => {
        fileReader.onload = event => {
            resolve(event.target.result)
        }
    })
}
