'use client'

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button } from "@nextui-org/button";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

export default function Resetsuccess() {

    // visible password
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    // email format validation
    const [value, setEmailValue] = useState("");

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;
    
        return validateEmail(value) ? false : true;
      }, [value]);


    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <form className="flex flex-col justify-center bg-forecolor p-10 gap-4 rounded-md" style={{ width: '382px' }}>
                <VerifiedOutlinedIcon />
                <p style={{ fontSize: '1.25rem', fontWeight: 500 }}>Password successfully reset</p>
                <p className="text-text mb-2">Your password has been successfully reset. Click below to log in. </p>
                
                <Link href="/signin"><Button color="primary" fullWidth className="text-white" size="md">Back to log in</Button></Link>
            </form>
        {/* <div className="inline-block max-w-xl text-center justify-center bg-forecolor">
            <span className={title()}>Make&nbsp;</span>
            <span className={title({ color: "violet" })}>Signin&nbsp;</span>
            <br />
            <span className={title()}>
            websites regardless of your design experience.
            </span>
            <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
            </div>
        </div>

        <div className="flex gap-3">
            <Link
            isExternal
            className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
            })}
            href={siteConfig.links.docs}
            >
            Documentation
            </Link>
            <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
            >
            <GithubIcon size={20} />
            GitHub
            </Link>
        </div>

        <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
                Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
            </Snippet>
        </div> */}
        </section>
    );
}