import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import s from './layout.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, s.body)}>
        <header
          className={s.header}
          style={{
            background: '#000',
          }}
        >
          <nav className={clsx(s.header_item, s.navbar)}>
            <Link href="/" className={clsx(s.homeLink, s.navbar_item)}>
              <Image
                src="/images/logo.png"
                alt="icon telegram"
                width={48}
                height={48}
                priority
              />
              <div className={s.navbar_label}>in2sql</div>
            </Link>
            <Link href="/contacts" className={s.navbar_item}>
              <div className={s.navbar_label}>Контакты</div>
            </Link>
            <Link href="/blog" className={s.navbar_item}>
              <div className={s.navbar_label}>Блог</div>
            </Link>
          </nav>

          <div className={s.header_item}>
            <div className={clsx(s.button, s['button-outline'])}>
              Попробовать бесплатно
            </div>
            <div className={(s.button, clsx(s.button, s['button-main']))}>
              Получить 1 год бесплатно
            </div>
          </div>
        </header>

        {children}

        <footer className={clsx(s.footer)}>
          <div className={clsx(s.content)}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                className={s.content_item}
                style={{
                  flex: 1,
                }}
              >
                <div className={s.geoLink}>
                  <Image
                    src="/images/icon-arrow.svg"
                    alt="icon arrow"
                    className={s.geoLink_icon}
                    width={15}
                    height={15}
                    priority
                  />
                  <div className={s.geoLink_label}>Москва</div>
                </div>

                <div>
                  <div>+7 495 000 00 00 — Бизнесу и ИП</div>
                  <div>+7 495 111 11 11 — Частным клиентам</div>
                </div>

                <div className={s.social}>
                  <Image
                    src="/images/icon-telegram.svg"
                    alt="icon telegram"
                    width={24}
                    height={24}
                    priority
                  />
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                }}
              ></div>
            </div>

            <div className={s.separator} />
            <nav className={clsx(s.content_item, s.navbar)}>
              <Link href="/" className={clsx(s.homeLink, s.navbar_item)}>
                <Image
                  src="/images/logo.png"
                  alt="icon telegram"
                  width={48}
                  height={48}
                  priority
                />
                <div className={s.navbar_label}>in2sql</div>
              </Link>
              <Link href="/contacts" className={s.navbar_item}>
                <div className={s.navbar_label}>Контакты</div>
              </Link>
              <Link href="/blog" className={s.navbar_item}>
                <div className={s.navbar_label}>Блог</div>
              </Link>
              <Link href="/try-free" className={s.navbar_item}>
                <div className={s.navbar_label}>Получить годовую лицензию</div>
              </Link>
            </nav>

            <div className={s.content_item}>
              © 2021-2023.ООО «ЧТО ТО», официальный сайт in2sql. Передавая нам
              свои контактные данные, мы гарантируем безопасность их хранения.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
