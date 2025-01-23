import React, { useContext, useEffect } from 'react'
import SimpleInputField from '../../InputFields/SimpleInputField'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import { Form, Formik } from 'formik'
import { YupObject, nameSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas'
import { country } from '@/Utils/AxiosUtils/API'
import { useQuery } from '@tanstack/react-query'
import request from '@/Utils/AxiosUtils'
import Btn from '@/Elements/Buttons/Btn'
import { AllCountryCode } from '@/Data/AllCountryCode'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

const CommonAddressForm = ({ type, updateId, setModal }) => {
    const router = useRouter()
    const { data, refetch, isLoading } = useQuery([country], () => request({ url: country }, router), { enabled: false, refetchOnWindowFocus: false, select: (res) => res.data.map((country) => ({ id: country.id, name: country.name, state: country.state })) });
    useEffect(() => {
        isLoading && refetch()
    }, [isLoading])
    const { t } = useTranslation('common');
    return (
        <>
            <Formik
                initialValues={{
                    title: "", street: "", country_id: data ? data : "", state_id: "", city: "", pincode: "", phone: "", type: type, user_id: updateId, country_code: '91'
                }}
                validationSchema={YupObject({
                    title: nameSchema, street: nameSchema, city: nameSchema, country_id: nameSchema, state_id: nameSchema, pincode: nameSchema, phone: phoneSchema,
                })}
                onSubmit={(values) => {
                    values['pincode'] = values['pincode'].toString();
                    setAddress((prev) => [...prev, values])
                    setModal(false)
                    // Put Your Logic Here
                }}>
                {({ values, setFieldValue }) => (
                    <Form className='row'>
                        <SimpleInputField nameList={[{ name: "title", placeholder: t("EnterTitle"), title: "Title", require: "true" },]} />
                        <div className='country-input mb-4'>
                            <SimpleInputField nameList={[{ name: "phone", type: "number", placeholder: "Enter Phone Number", require: "true" }]} />
                            <SearchableSelectInput
                                nameList={[
                                    {
                                        name: "country_code", notitle: "true", inputprops: { name: "country_code", id: "country_code", options: AllCountryCode, },
                                    },
                                ]}
                            /></div>
                        <SimpleInputField nameList={[{ name: "street", placeholder: "Enter Address", title: "Address", require: "true" }]} />
                        <SearchableSelectInput
                            nameList={[
                                {
                                    name: "country_id", title: "Country",
                                    require: "true",
                                    inputprops: {
                                        name: "country_id", id: "country_id", options: data, defaultOption: "Select state",
                                    },
                                    disabled: values?.["country_id"] ? false : true,
                                },
                                {
                                    name: "state_id", title: "State",
                                    require: "true",
                                    inputprops: {
                                        name: "state_id", id: "state_id", options: values?.["country_id"] ? data.filter((country) => Number(country.id) === Number(values?.["country_id"]))?.[0]?.["state"] : [], defaultOption: "Select state",
                                    },
                                    disabled: values?.["country_id"] ? false : true,
                                },
                            ]}
                        />
                        <SimpleInputField nameList={[{ name: "city", title: "City", require: "true", placeholder: "Enter City" }]} />
                        <SimpleInputField nameList={[{ name: "pincode", title: "Pincode", require: "true", type: 'number', placeholder: "Enter Pincode" }]} />

                        <div className="ms-auto justify-content-center dflex-wgap save-back-button">
                            <Btn className="btn-md btn-secondary fw-bold" title="Cancel" onClick={() => { setModal(false) }} />
                            <Btn className="btn-md btn-theme fw-bold" type="submit" title="Submit"  />
                        </div>
                    </Form>
                )
                }
            </Formik>

        </>
    )
}

export default CommonAddressForm