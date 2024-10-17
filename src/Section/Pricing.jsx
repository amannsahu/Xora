import clsx from 'clsx';
import React, { useState } from 'react'
import {plans} from "../Constants/index"
import bgoutline from "../images/bg-outlines.svg"
import bgoutlinefill from "../images/bg-outlines-fill.png"
import check from "../images/check.png"
import CountUp from "react-countup"
import ReusableButton from '../Components/ReusableButton';

const Pricing = () => {

    const [monthly, setMonthly] = useState(false);

  return (
    <div id='pricing'>
      <div className='container'>
        <div className='max-w-960 mx-auto pricing-head_before relative border-l border-r border-s2
        bg-s1/50 pb-40 pt-28 '>
            <h3 className='h5 relative mx-auto text-center z-2 max-w-sm lg:h3 lg:max-w-lg text-p4'>
                Flexible pricing for teams of all sizes
            </h3>
            <div className='relative z-2 mx-auto flex w-[375px] rounded-3xl p-2 border-[3px] border-s4/25 
            bg-s1 backdrop-blur-[6px] mt-12'>
                <button
                className={clsx('pricing-head_btn', monthly && "text-p4")}
                onClick={() => setMonthly(true)}>
                    Monthly
                </button>
                <button
                className={clsx('pricing-head_btn', !monthly && "text-p4")}
                onClick={() => setMonthly(false)}>
                    Annual
                </button>
                <div
                className={clsx('g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500', !monthly && "translate-x-full")}/>
            </div>
            <div className='pricing-bg'>
                <img src={bgoutline} width={960} height={380} alt='outline' className='relative z-2' />
                <img src={bgoutlinefill} width={960} height={380} alt='outline' className='absolute inset-0 opacity-5 mix-blend-soft-light' />
            </div>
        </div>

        <div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-12 max-xl:overflow-auto 
        max-xl:pt-6 max-xl:flex-col max-xl:ml-28'>
            {plans.map((plan, index) => (
                <div key={plan.id} 
                className='pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative
                border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]'>
                    {index === 1 && (
                        <div className='g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl'/>
                    )}

                    <div className={clsx('absolute left-0 right-0 z-2 flex items-center justify-center max-lg:-top-8', index === 1 ? '-top-6' : 'top-6 xl:-top-11')}>
                        <img src={plan.logo} alt={plan.title} 
                        className={clsx('object-contain drop-shadow-2xl', index === 1 ? "size-[120px]":"size-[88px]")}/>
                    </div>

                    <div className={clsx('relative flex flex-col items-center', index === 1 ? "pt-24":"pt-12")}>
                        <div className={clsx('small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase', index === 1 ? "border-p3 text-p3" : "border-p1 text-p1")}>
                            {plan.title}
                        </div>

                        <div className='relative z-2 flex items-center justify-self-center'>
                            <div className={clsx('h-num flex items-start', index === 1 ? "text-p3":"text-p4")}>
                                $ <CountUp 
                                start={plan.priceMonthly} 
                                end={monthly ? plan.priceMonthly : plan.priceYearly}
                                duration={0.4}
                                useEasing={false}
                                preserveValue/>
                            </div>
                            <div className='small-1 relative top-4 ml-1 uppercase'>
                                /mo
                            </div>
                        </div>

                        <div className='relative z-2 body-1 mb-10 w-full pb-9 border-b-s2 text-p4 text-center'>
                            {plan.caption}
                        </div>

                        <ul className='mx-auto space-y-4 xl:px-7'>
                            {plan.features.map((feature) => (
                                <li key={feature} className='relative flex items-center gap-5'>
                                    <img src={check} alt='check' className='size-10 object-contain'/>
                                    <p className='flex-1'>{feature}</p>
                                </li>
                            ))}
                        </ul>

                        <button className='mt-10'>
                            <ReusableButton imgSrc={plan.icon}>Get Started</ReusableButton>
                        </button>

                        <div className={clsx('text-p3 small-compact mt-10', index === 1 ? "block" : "hidden")}>
                            - Limited time offer -
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing;
