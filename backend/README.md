This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


    <h4 className='fw-semibold'>{t("product_box_variant")}</h4>
              <Row className=' row-cols-xxl-5 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 g-4'>
                    {Product_box_variant.map((elem, i) => (
                        <div key={i} >
                            <div className="selection-box text-center">
                            <Input name="[options][product][product_box_variant]" type="radio" id={elem.value} checked={values["options"]["product"]["product_box_variant"] == elem.value ? true : false} onChange={() => handleChange(elem)}/>
                                <Label htmlFor={elem.value}>
                                    <div>
                                        <Image src={elem.image} className="img-fluid" alt="" height={100} width={165} />
                                    </div>
                                    <h4 className="mt-2">{t(elem.label)}</h4>
                                </Label>
                            </div>
                        </div>
                    ))}
                </Row>