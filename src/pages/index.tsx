import React from 'react'
import { default as classNames } from 'classnames'
import { BallIcon, CatDefault, FishBone, Logo, MouseIcon, PlusIcon } from '@/common/components/Icons/common'
import Link from 'next/link'
import { Button, Col, Collapse, Row } from 'antd'
import { CatCute, Flower, LineVector2, Vector2 } from '@/common/components/Icons/home'
import Image from 'next/image'
import { Footer } from '@/common/components/Footer'
const { Panel } = Collapse

const Page: React.FunctionComponent = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <div className={'bg-[#fff] min-h-screen'}>
      <div className={'absolute top-[1050px] sm:top-[1200px] left-10 z-10 '}>
        <FishBone className={'w-[70px] sm:w-[100px] h-auto'} />
      </div>
      <div className={'absolute top-[700px] sm:top-[690px] right-0 z-10 rounded-[30px]'}>
        <div className={'flex gap-3'}>
          <BallIcon className={'w-[70px] sm:w-[100px] h-auto mt-10'} />
          <div>
            <Image
              className={'w-[90px] sm:w-[120px] h-auto'}
              src={require('@/common/assets/images/hand-dog.png')}
              alt={''}
            />
          </div>
        </div>
      </div>
      <div className={'md:container max-w-[1536px] md:mx-auto w-full px-2 lg:px-10 py-3'}>
        <div className={'flex justify-between'}>
          <Link href="/" className={classNames('h-full flex items-center justify-center')}>
            <div className="flex items-center gap-2 relative">
              <Logo className={'w-[50px] sm:w-[78px]'} />
            </div>
          </Link>
          <Link href={'/tapos'}>
            <Button className={'border-0 bg-[#CA5C3B] min-w-[120px] text-[#fff] font-medium h-10 rounded-[100px]'}>
              Launch App
            </Button>
          </Link>
        </div>
        <div className={'px-5 bg-[#EDE0DC] rounded-[50px] p-10 sm:p-20 mt-8 relative'}>
          <div className={'absolute bottom-0 hidden sm:block left-[30%]'}>
            <LineVector2 />
            <div className={'absolute -right-0 -top-7 z-[100]'}>
              <MouseIcon />
            </div>
          </div>
          <Row>
            <Col xs={24} xl={12} className={'flex justify-center items-center'}>
              <div className={'max-w-[450px]'}>
                <h1 className={'text-[#000] text-4xl font-bold'}>Tapos to Earn</h1>
                <p className={'font-medium mt-3 text-lg text-[#6E6D7A]'}>
                  The more tickle you made, the more transaction you send, the more $HEART you earn
                </p>
                <Link href={'/tapos'}>
                  <Button
                    className={
                      'text-[#080708] hover:bg-[#CA5C3B] hover:text-[#fff] hover:border-[#CA5C3B] mt-5 h-10 rounded-full font-medium bg-transparent border-[#080708] rounded-[100px ]'
                    }
                  >
                    Start Now
                  </Button>
                </Link>
              </div>
            </Col>
            <Col xs={24} xl={12} className={'flex justify-center w-full relative'}>
              <div
                className={
                  'w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#EEC5C7] flex items-center justify-center rounded-full mt-10 sm:mt-0'
                }
              >
                <CatDefault className={'w-[150px] sm:w-[200px] h-auto'} />
              </div>
            </Col>
          </Row>
        </div>
        <div className={'flex justify-center items-center  py-40 min-h-[450px] sm:min-h-[700px] relative'}>
          <div className={'justify-center gap-10 flex items-start'}>
            <div>
              <Flower className={'w-[80px] h-[80px]'} />
            </div>
            <div className={'text-base sm:text-3xl text-[#080708] max-w-[550px] leading-6 sm:leading-10'}>
              <span className={'font-bold'}>Tapos</span> is a viral clicker game where you earn coins by tapping the
              screen to tickle the cat and completing tasks.
            </div>
          </div>
        </div>
      </div>
      <div className={'bg-[#EDE0DC] flex items-center justify-center p-3 sm:p-20'}>
        <div
          className={
            'w-[350px] sm:w-[600px] h-[350px] sm:h-[600px]  flex flex-col justify-center items-center bg-[#EEC5C7] rounded-full p-10 sm:p-20 relative'
          }
        >
          <div className={'absolute hidden sm:block right-[-200px] top-[-50px]'}>
            <Vector2 />
          </div>
          <h3 className={'text-base sm:text-3xl font-bold text-center text-[#fff]'}>We are on web & Telegram bot</h3>
          <p className={'text-center mt-5 font-medium text-xs sm:text-base text-[#464646]'}>
            Built on the APTOS blockchain, Ticklr is a Telegram-based bot offering simplicity, security, and limitless
            earning potential within the APTOS ecosystem. Effortlessly transfer, and mine $HEART directly on Telegram,
            all while enjoying the convenience of seamless transactions.
          </p>
          <Button
            className={
              'text-[#FFFFFF] hover:bg-[#CA5C3B] hover:text-[#fff] hover:border-[#CA5C3B] mt-4 sm:mt-8 bg-transparent h-9 sm:h-11 px-6 border-[#FFFFFF] rounded-[100px]'
            }
          >
            Check it out
          </Button>
        </div>
      </div>
      <div className={'md:container max-w-[1236px] md:mx-auto w-full px-4 lg:px-10 py-3'}>
        <div className={'py-40'}>
          <Row gutter={[8, 8]}>
            <Col className={'flex items-center'} xs={24} xl={10}>
              <div className={'relative'}>
                <h1 className={'text-2xl sm:text-5xl text-[#080708]'}>Frequently Asked Questions</h1>
                <div className={'absolute top-[-200px] right-5 sm:right-[120px]'}>
                  <CatCute className={'w-[120px] sm:w-[220px]'} />
                </div>
              </div>
            </Col>
            <Col xs={24} xl={14}>
              <Collapse
                expandIcon={(panelProps: any) => {
                  return (
                    <div className={'transition-delay'}>
                      <PlusIcon />
                    </div>
                  )
                }}
                expandIconPosition={'right'}
                className={'w-full bg-transparent p-0 mt-10 sm:mt-0'}
                onChange={onChange}
              >
                <Panel
                  className={'bg-[#ffffff] dark:bg-[#1C1D25] px-0  md:p-0 mb-3 '}
                  header={
                    <div className={'text-[#000] text-xl font-medium pb-6 pt-3'}>Do I need to connect wallet?</div>
                  }
                  key="1"
                >
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5]'}>------------------------</p>
                </Panel>
                <Panel
                  className={'bg-[#ffffff] dark:bg-[#1C1D25] px-0 md:p-0 mb-3 '}
                  header={<div className={'text-[#000] text-xl font-medium pb-6 pt-3'}>How to start the game?</div>}
                  key="2"
                >
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5]'}>------------------------</p>
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5] mt-2'}>------------------------</p>
                </Panel>
                <Panel
                  className={'bg-[#ffffff] dark:bg-[#1C1D25] px-0 md:p-0 mb-3 '}
                  header={<div className={'text-[#000] text-xl font-medium pb-6 pt-3'}>What is $HEART coin?</div>}
                  key="3"
                >
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5]'}></p>
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5] mt-2'}></p>
                </Panel>
                <Panel
                  className={'bg-[#ffffff] dark:bg-[#1C1D25] px-0 md:p-0 mb-3'}
                  header={<div className={'text-[#000] text-xl font-medium pb-6 pt-3'}>What is user’s risk?</div>}
                  key="4"
                >
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5]'}></p>
                </Panel>
                <Panel
                  className={'bg-[#ffffff] dark:bg-[#1C1D25] px-0 md:p-0 mb-3'}
                  header={<div className={'text-[#000] text-xl font-medium pb-6 pt-3'}>How to pay the gas fee?</div>}
                  key="5"
                >
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5]'}></p>
                  <p className={'text-[#1a2a3b] dark:text-[#ABAFB5] mt-2'}></p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Page
