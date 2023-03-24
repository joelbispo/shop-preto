import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

interface SucessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Sucess({ customerName, product }: SucessProps) {
  return (
    <SuccessContainer>
      <h1>Thanks for your purchase</h1>

      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={110} alt="" />
      </ImageContainer>
      <p>
        uhuul <strong>{customerName}</strong>, your{' '}
        <strong>{product.name}</strong> is already on its way to your you.
      </p>
      <Link href="/">Back to shop</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
