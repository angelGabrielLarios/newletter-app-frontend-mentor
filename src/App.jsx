import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Button } from "./components"

const App = () => {

  const navigate = useNavigate()

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      email: ""
    }
  })



  const isErrorEmail = errors?.email?.type === 'required' || errors?.email?.type === 'pattern'

  const onSubmitForm = (data) => {
    const { email = null } = data

    navigate(`page-success?email=${email}`, {
      replace: false
    })

  }
  console.log(errors)
  return (
    <main
      className="bg-CharcoalGrey min-h-screen flex justify-center items-center"
    >
      <section
        className="grid grid-cols-1 md:grid-cols-2 bg-White w-full md:w-10/12 lg:w-6/12 md:p-6 md:rounded-3xl"
      >
        <img
          className="block md:hidden w-full"
          src="/assets/images/illustration-sign-up-mobile.svg"
          alt="illustration-sign-up-mobile.svg"
        />

        <img
          className="none md:block w-full object-cover h-full rounded-xl md:order-1"
          src="/assets/images/illustration-sign-up-desktop.svg"
          alt="illustration-sign-up-desktop.svg"
        />

        <article className="p-6 text-DarkSlateGrey flex flex-col justify-center">
          <div
            className="space-y-5">

            <h1
              className="font-bold text-3xl mb-4"
            >
              Stay updated!
            </h1>

            <p className="">
              Join 60, 000+ product managers receiving monthly updates on
            </p>

            <ul className="space-y-4">
              <li
                className="flex gap-4 items-center"
              >
                <img
                  className=""
                  src="assets/images/icon-list.svg"
                  alt="icon-list.svg"
                />
                <p>
                  Product discovery and building waht matters
                </p>
              </li>

              <li
                className="flex gap-4 items-center"
              >
                <img
                  className=""
                  src="assets/images/icon-list.svg"
                  alt="icon-list.svg"
                />
                <p>
                  Measruring to ensure updates are a success
                </p>
              </li>

              <li
                className="flex gap-4 items-center"
              >
                <img
                  className=""
                  src="assets/images/icon-list.svg"
                  alt="icon-list.svg"
                />
                <p>
                  And much
                </p>
              </li>
            </ul>
          </div>


          <form
            className="mt-10"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="mb-5">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="block text-DarkSlateGrey font-bold text-sm mb-2"
                >
                  Email address
                </label>

                {
                  errors?.email?.type === 'required' && <p className="text-red-600 font-bold text-sm">
                    Valid email is required
                  </p>
                }

                {
                  errors?.email?.type === 'pattern' && <p className="text-red-600 font-bold text-sm">
                    This email is not valid
                  </p>
                }
              </div>

              <input
                type="text"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })}
                className={`border ${isErrorEmail ? 'bg-red-200 border-red-600 focus:outline-red-600 text-red-600' : 'border-gray-400 bg-White focus:outline-DarkSlateGrey text-DarkSlateGrey'} text-DarkSlateGrey text-sm rounded-lg block w-full py-3 px-5 `}
                placeholder="email@company.com"

              />
            </div>


            <Button
              type="submit"

            >
              Subscribe to monthly newsletter!
            </Button>

          </form>




        </article>



      </section>
    </main>
  )
}

export default App