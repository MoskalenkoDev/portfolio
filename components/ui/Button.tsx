// 'use client'
import Link from 'next/link'

import { type VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded font-mono text-sm font-semibold transition-all duration-150 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  variants: {
    variant: {
      primary: 'bg-primary text-background hover:bg-primary-light',
      secondary: 'border border-border text-foreground hover:border-primary hover:text-primary',
    },
    size: {
      default: 'px-5 py-3',
      sm: 'px-2 py-1.5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonVariants = VariantProps<typeof button>

interface BaseProps extends ButtonVariants {
  children: React.ReactNode
  className?: string
}

interface LinkProps extends BaseProps {
  href: string
  download?: boolean | string
  target?: string
  rel?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

interface NativeButtonProps extends BaseProps {
  href?: never
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type ButtonProps = LinkProps | NativeButtonProps

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  const classes = button({ variant, size, class: className })

  if ('href' in props && props.href) {
    const { href, download, target, rel, onClick } = props as LinkProps
    const isExternal = download || target === '_blank' || /^(https?:|mailto:|tel:)/.test(href)

    if (isExternal) {
      return (
        <a href={href} download={download} target={target} rel={rel} onClick={onClick} className={classes}>
          {children}
        </a>
      )
    }

    if (href.startsWith('#')) {
      return (
        <a href={href} onClick={onClick} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  const { type = 'button', onClick } = props as NativeButtonProps
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
