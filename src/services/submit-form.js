import axios from "axios";
import fs from "fs";

export default async function sendForm() {
  const formData = new FormData()
  const form  = {
    firstname: "Alexis",
    lastname: "tran",
  }

  formData.append("file", fs.createReadStream("../assets/diagram.svg"))
  formData.append("form", form)

  const res = await axios.post("http://localhost:3000", formData, {
    headers: formData.getHeaders()
  })
  }
