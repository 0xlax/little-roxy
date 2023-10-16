"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server"; // Import the LoginLink from the new package
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginButton() {
  return (
    <LoginLink // Use the LoginLink component
      className="group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700"
    >
      <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
        Login
      </p>
    </LoginLink>
  );
}
