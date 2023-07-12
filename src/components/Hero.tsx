import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon.js'
import Button from '@/components/common/Button.tsx'
import HighlightText from '@/components/common/HighlightText.tsx'
import SocialMediaLinks from '@/components/common/SocialMediaLinks.tsx'
import Section from '@/components/layouts/Section.tsx'

export default function Hero() {
  const scrollToWorks = () => {
    window.location.assign('#works')
  }

  return (
    <Section className='flex h-[88vh] min-h-[480px] flex-col justify-between'>
      <div className='flex h-3/4 flex-col justify-center gap-6'>
        <h2 className='text-2xl md:text-4xl'>I'm Louis Gustavo</h2>
        <h1 className='break-words text-4xl font-extrabold tracking-tight xs:text-5xl sm:text-6xl lg:text-7xl'>
          A <HighlightText>software engineer</HighlightText> and a{' '}
          <HighlightText>Computer Science</HighlightText> undergraduate.
        </h1>
        <SocialMediaLinks className='mt-3' />
      </div>
      <Button
        className='mx-auto'
        icon={<ArrowDownSLineIcon />}
        textContent='Featured works'
        onClick={scrollToWorks}
      />
    </Section>
  )
}