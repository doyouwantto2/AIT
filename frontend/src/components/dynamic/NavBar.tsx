import { useState, useEffect } from "react";

export function AstroButton() {
  return (
    <button>
      <a href="/">Astro</a>
    </button>
  )
}

export function AboutButton() {
  return (
    <button>
      <a href="/about">About</a>
    </button>
  )
}

export function ChatButton() {
  return (
    <button>
      <span className="cursor-pointer">Chat</span>
    </button>
  )
}

export function MenuButton() {
  return (
    <button>
      <span className="cursor-pointer">Menu</span>
    </button>
  )
}

export function FetchAbout() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Fetch error:", err))
  })

  return (
    <div>
      {message}
    </div>
  )
}

