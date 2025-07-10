import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button";
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p>Practice on real interview questions and get instant feedback.</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>

        </div>
        <Image src="/robot.png"
          alt="robo-dude"
          width={500}
          height={500}
          className='max-sm:hidden'/>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {dummyInterviews.map(interview => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {dummyInterviews.map(interview => (
              <InterviewCard {...interview} key={interview.id}/>
          ))}
          <p>You haven't taken any interviews yet.</p>
        </div>
      </section>    

    </>
  )
}

export default page 