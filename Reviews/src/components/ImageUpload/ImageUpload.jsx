import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/firebaseConfig.js';
import { useState } from 'react';

const ImageUpload = () => {
    const [imgURL, setImgURL] = useState("")
    const [progress, setProgress] = useState(0)

    const handleUpload = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if (!file) return;

        const storageRef = ref(storage, `image/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgURL(url)
                })
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type="file" />
                <button type="submit" >Submit</button>
            </form>
            {!imgURL && <progress value={progress} max="100" />}
            {imgURL && <img src={imgURL} alt='Image' height={200} />}
        </div>
    )
}

export default ImageUpload