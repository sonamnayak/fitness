import { SelectedPage } from '@/shared/types'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import Heading from '@/shared/Heading'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({
  setSelectedPage
}: Props) => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  const inputStyles = 'mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white outline-0'

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <Heading>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </Heading>
          <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate. Eu scelerisque felis imperdiet proin fermentum. Sed vulputate odio ut enim. Turpis egestas integer eget aliquet nibh praesent tristique magna. Sit amet aliquam id diam maecenas ultricies mi.</p>
        </motion.div>

        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              method='POST'
              action='https://formsubmit.co/your@email.com'
            >
              <input type='text' placeholder='NAME' className={inputStyles}
                {...register('name', {
                  required: true,
                  maxLength: 100
                })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' && 'Max length is 100 characters'}
                </p>
              )}
              <input type='text' placeholder='EMAIL' className={inputStyles}
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'pattern' && 'Invalid email address'}
                </p>
              )}
              <textarea placeholder='MESSAGE' className={inputStyles} rows={4} cols={50}
                {...register('message', {
                  required: true,
                  maxLength: 2000
                })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === 'required' && 'This field is required'}
                  {errors.message.type === 'maxLength' && 'Max length is 2000 characters'}
                </p>
              )}

              <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-8 py-2 transition duration-500 hover:text-white'>
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img src={ContactUsPageGraphic} alt='ContactUsPageGraphic' className='w-full' />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs