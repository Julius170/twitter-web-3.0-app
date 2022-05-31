const key = process.env.NEXT_PUBLIC_PINATA_API_KEY
const secret = process.env.NEXT_PUBLIC_PINATA_API_SECRET

import axiois from 'axios'
export const pinJSONToIPFS = async (json) => {
    const url = 'https:/api.pianata.cloud/pinning/pinJSONToIPFS'
    return axiois.post(url, json, {
        headers: {
            pinata_api_key: key,
            pinata_secret_api_key: secret,

        },
    })
    .then((response) => {
        return response.data.IpfsHash
    })
    .catch((error) => {
        console.log(error)
    })
}

export const pinFileToIPFS = async (file, pinataMetadata) => {
    const url = 'https:/api.pianata.cloud/pinning/pinJSONToIPFS'

    let data = new FormData()

    data.append("file", file)
    data.append("pinataMetadata", JSON.stringify(pinataMetadata))
    return axiois
    .post(url, data, {
        maxBodyLength: Infinity,
        headers: {
            'Content-Type': `multipart/formdata; boundary={data._boundary}`,
            pinata_api_key: key,
            pinata_secret_api_key: secret,
       },
    })
    .then (function (response) {
        return response.data.IpfsHash
    })
    .catch(function (error) {
        console.log(error)
    })
}