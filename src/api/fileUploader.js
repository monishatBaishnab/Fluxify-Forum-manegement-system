import axios from "axios";

export const fileUploader = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`;
    const res = await axios.post(api, formData);
    return res?.data;
}

