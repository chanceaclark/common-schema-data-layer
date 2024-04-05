import { ProductViewed } from "./_components/ProductViewed";

export default function ProductPage() {
  return (
    <>
      <ProductViewed product={{
        reviewSummary: {
          numberOfReviews: 0,
        },
        availabilityV2: {
          status: 'Available'
        }
      }} />
      <h1>Product Page</h1>
    </>
  );
}
