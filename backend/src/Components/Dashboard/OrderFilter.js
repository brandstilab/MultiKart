import { Form, Formik } from "formik";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";

const OrderFilter = ({setFilterValue,setFilterType}) => {
  return (
    <Formik initialValues={{ filter_by: "" }}>
      {({ values, setFieldValue }) => (
        <Form>
          <SearchableSelectInput
            nameList={[
              {
                name: "filter_by",
                notitle: "true",
                inputprops: {
                  name: "filter_by",
                  id: "filter_by",
                  options: [
                    {
                      value: "today",
                      name: "Today",
                    },
                    {
                      value: "last_week",
                      name: "Last Week",
                    },
                    {
                      value: "last_month",
                      name: "Last Month",
                    },
                    {
                      value: "this_year",
                      name: "This Year",
                    },  
                    {
                      value: "all_time",
                      name: "All Time",
                    },
                  ] || [],
                  value: values["filter_by"] ? values["filter_by"]?.name : "Filter By",
                },
                store: "obj",
                noSearchBar: true,
                setvalue: (name, value)=>{setFieldValue("filter_by", value); setFilterValue(value?.value);setFilterType(value?.name)},
              },
            ]}
          />
        </Form>
      )}
    </Formik>
  );
};

export default OrderFilter;
