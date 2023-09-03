import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components"



export const PageSuccess = () => {


    const [textEmail, setTextEmail] = useState('')


    const navigate = useNavigate()

    useEffect(() => {
        const url = new URL(location.href)
        const urlSearchParams = new URLSearchParams(url.search)

        setTextEmail(
            urlSearchParams.get('email')
        )


    }, [])

    const onClickButton = () => {
        navigate('/', {
            replace: false
        })
    }

    return (
        <main
            className="min-h-screen flex justify-center items-center class bg-CharcoalGrey"
        >
            <article
                className="bg-White w-8/12 md:w-3/12 p-8 rounded-xl space-y-5 "
            >
                <img
                    src="/assets/images/icon-success.svg"
                    alt="icon-success"
                    className="block w-[3rem]"
                />

                <h1
                    className="text-DarkSlateGrey text-4xl font-bold "
                >
                    Thanks for for subscribing!
                </h1>

                <p className="text-sm">
                    A confirmation email has been to <strong className="text-DarkSlateGrey">{textEmail}</strong> Please open it and click the button inside to confirm your subscription
                </p>

                <Button
                    type="button"
                    onClick={onClickButton}
                >
                    Dimiss Message
                </Button>
            </article>
        </main>
    )
}
