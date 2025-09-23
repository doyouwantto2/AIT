import { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

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

