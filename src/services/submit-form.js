import axios from "axios";
import fs from "fs";

export default async function sendForm(data, file) {
  const formData = new FormData()
  const form  = {
    firstname: "Alexis",
    lastname: "tran",
  }

  formData.append("file", file)
  formData.append("form", form)

  await axios.post("http://localhost:4000", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  })
  }
