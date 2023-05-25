import Link from 'next/link'
import Image from 'next/image'
import { Button } from '~/../../packages/ui'
import { primaryLinks, secondaryLinks } from '~/data/footer'
import { LayoutMainContent } from '../../layouts/DefaultLayout'

const Footer2 = () => <div />

const Footer = () => (
  <LayoutMainContent className="pt-0">
    <hr className="border-scale-400 my-6"></hr>
    <div className="flex gap-4 items-center justify-between">
      <div className="flex flex-col lg:flex-row gap-3 ">
        <a className="text-xs text-scale-900">&copy; Hasura</a>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://github.com/nullxone/helium-for-hasura-starter-kit"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.66832 1.55469C4.98649 1.55469 2.00195 4.54402 2.00195 8.23269C2.00195 11.1827 3.91187 13.686 6.56108 14.5687C6.8944 14.63 7.01573 14.424 7.01573 14.2467C7.01573 14.0887 7.0104 13.668 7.00706 13.1114C5.15248 13.5147 4.76116 12.216 4.76116 12.216C4.45851 11.444 4.0212 11.2387 4.0212 11.2387C3.41589 10.8254 4.06719 10.8334 4.06719 10.8334C4.73583 10.88 5.08782 11.5214 5.08782 11.5214C5.68246 12.5414 6.64841 12.2467 7.02773 12.076C7.08906 11.6447 7.26105 11.3507 7.45171 11.184C5.97178 11.0154 4.41518 10.442 4.41518 7.88335C4.41518 7.15469 4.67517 6.55802 5.10115 6.09135C5.03248 5.92269 4.80383 5.24335 5.16648 4.32469C5.16648 4.32469 5.72645 4.14469 6.99973 5.00869C7.54355 4.86036 8.10464 4.78482 8.66832 4.78402C9.23496 4.78669 9.80494 4.86069 10.3376 5.00869C11.6102 4.14469 12.1688 4.32402 12.1688 4.32402C12.5328 5.24335 12.3035 5.92269 12.2355 6.09135C12.6621 6.55802 12.9208 7.15469 12.9208 7.88335C12.9208 10.4487 11.3615 11.0134 9.87694 11.1787C10.1163 11.3847 10.3289 11.792 10.3289 12.4154C10.3289 13.3074 10.3209 14.028 10.3209 14.2467C10.3209 14.4254 10.4409 14.6334 10.7796 14.568C12.107 14.1228 13.261 13.2716 14.0784 12.1347C14.8958 10.9979 15.3353 9.6329 15.3347 8.23269C15.3347 4.54402 12.3495 1.55469 8.66832 1.55469Z"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://www.youtube.com/@HasuraHQ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.665 4.35595C15.481 3.66308 14.9388 3.11739 14.2505 2.93221C13.0028 2.5957 7.99964 2.5957 7.99964 2.5957C7.99964 2.5957 2.99655 2.5957 1.74883 2.93221C1.06047 3.11742 0.518326 3.66308 0.334321 4.35595C0 5.61181 0 8.23207 0 8.23207C0 8.23207 0 10.8523 0.334321 12.1082C0.518326 12.8011 1.06047 13.324 1.74883 13.5092C2.99655 13.8457 7.99964 13.8457 7.99964 13.8457C7.99964 13.8457 13.0027 13.8457 14.2505 13.5092C14.9388 13.324 15.481 12.8011 15.665 12.1082C15.9993 10.8523 15.9993 8.23207 15.9993 8.23207C15.9993 8.23207 15.9993 5.61181 15.665 4.35595ZM6.36334 10.6111V5.85307L10.545 8.23212L6.36334 10.6111Z"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://old.reddit.com/r/Hasura/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src="/docs/reddit-logo.svg" width={13} height={13} alt="Reddit" />
        </Button>
      </div>
    </div>
  </LayoutMainContent>
)

export default Footer
