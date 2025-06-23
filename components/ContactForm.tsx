"use client"

import { useState } from "react"
import { Button as MUIButton } from "@mui/material"
import TextField from "@mui/material/TextField"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { sendEmail } from "../app/actions/sendEmail"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface ContactFormProps {
  onClose: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailError, setEmailError] = useState("")

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address")
      return false
    }
    setEmailError("")
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) return

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        toast.success("Your message has been sent successfully.")
        onClose()
      } else {
        toast.error("Failed to send your message. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.")
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <TextField
              label="Name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div>
            <TextField
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
              fullWidth
              required
              error={!!emailError}
              helperText={emailError}
            />
          </div>
          <div>
            <TextareaAutosize
              minRows={4}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <MUIButton variant="outlined" onClick={onClose}>
              Cancel
            </MUIButton>
            <MUIButton type="submit" variant="contained" color="primary">
              Submit
            </MUIButton>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
