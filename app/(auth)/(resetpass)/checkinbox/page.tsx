"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Checkinbox() {
  const searchParams = useSearchParams(); // Get search params
  const email = searchParams.get("email"); // Retrieve the email from the query string

  const router = useRouter();

  const [state, setState] = useState("");

  const [code, setCode] = useState<string[]>(Array(6).fill("")); // Create an array with 6 empty strings

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;

    // Allow only one digit
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code];

      newCode[index] = value;
      setCode(newCode);

      // Focus next input field
      if (value && index < 5) {
        document.getElementById(`digit-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      // Focus previous input if backspace is pressed on empty input
      document.getElementById(`digit-${index - 1}`)?.focus();
    }
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const pastedData = event.clipboardData.getData("text");

    // Check if pasted data is exactly 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("").map((digit) => digit);

      setCode(newCode);
      document.getElementById(`digit-5`)?.focus(); // Focus last input
      event.preventDefault(); // Prevent default paste behavior
    } else {
      event.preventDefault(); // Prevent invalid paste
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const verificationCode = code.join(""); // Join the array to submit as a string

    console.log("Verification code submitted:", verificationCode);

    const response = await fetch("http://localhost:3000/api/verifycode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, code: verificationCode }),
    });

    if (!response.ok) {
      setState("Invalid code");
      return;
    } else {
      // const data = await response.json();
      router.push(`/newpass?email=${encodeURIComponent(email as string)}`);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <form
        className="flex flex-col justify-center bg-forecolor p-10 gap-4 rounded-md"
        style={{ width: "382px" }}
        onSubmit={handleSubmit}
      >
        <p style={{ fontSize: "1.5rem", fontWeight: 500 }}>Check your inbox</p>
        <p className="text-text mb-2">
          Please enter 6-digit code. Then create and confirm your new password.
        </p>
        <div className="flex justify-around">
          {code.map((digit, index) => (
            <input
              key={index}
              required
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md"
              id={`digit-${index}`}
              maxLength={1}
              type="text"
              value={digit}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              onPaste={(event) => handlePaste(event, index)}
            />
          ))}
        </div>
        <p className="text-error">{state}</p>
        <div className="flex">
          <p>{"Didn't get the code?"}</p>
          <Link>Resend the code</Link>
        </div>
        <Button
          fullWidth
          className="text-white"
          color="primary"
          size="md"
          type="submit"
        >
          Verify
        </Button>
      </form>
    </section>
  );
}
