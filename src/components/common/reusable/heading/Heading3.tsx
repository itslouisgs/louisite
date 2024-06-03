import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

export default function Heading3({ id, className, children }: ComponentProps) {
  return (
    // prettier-ignore
    <h3
      id={id}
      className={clsx(
        className,
        'pb-4',
        'font-semibold text-lg'
      )}
    >
      {children}
    </h3>
  )
}
