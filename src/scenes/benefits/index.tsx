import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Heading from '@/shared/Heading'
import { BenefitType } from '@/shared/types'
import Benefit from './Benefit'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from '@/shared/ActionButton'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    description: 'Lorem ipsum dolor sit amet. Ea earum magnam et similique asperiores non nihil nihil 33 rerum dignissimos'
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description: 'Lorem ipsum dolor sit amet. Ea earum magnam et similique asperiores non nihil nihil 33 rerum dignissimos'
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainers',
    description: 'Lorem ipsum dolor sit amet. Ea earum magnam et similique asperiores non nihil nihil 33 rerum dignissimos'
  },
]

const container = {
  hidden: {}, 
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({
  setSelectedPage,
}:Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-24'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x:-50},
            visible: { opacity: 1, x: 0 }
          }}
        >
          <Heading>MORE THAN JUST A GYM</Heading>
          <p className='my-5 text-sm'>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care to each and every member.</p>
        </motion.div>

        <motion.div className='md:flex items-center justify-between gap-8 mt-5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))
          }
        </motion.div>

        <div className='mt-14 md:mt-28 md:flex items-center justify-between gap-20'>
          <img src={BenefitsPageGraphic} alt='BenefitsPageGraphic' className='mx-auto' />
          <div>
            <div className='relative mt-8 md:mt-0'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x:50},
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Heading>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className='text-primary-500'>FIT</span>
                  </Heading>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x:50},
                visible: { opacity: 1, x: 0 }
              }}
            >
              <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate. Eu scelerisque felis imperdiet proin fermentum. Sed vulputate odio ut enim. Turpis egestas integer eget aliquet nibh praesent tristique magna. Sit amet aliquam id diam maecenas ultricies mi.</p>
              <p className='mb-5'>Nec dui nunc mattis enim ut tellus elementum sagittis. In mollis nunc sed id semper risus in hendrerit gravida. Imperdiet massa tincidunt nunc pulvinar sapien et.</p>
            </motion.div>

            <div className='relative mt-14'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits