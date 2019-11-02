import * as Yup from "yup";

const copy = {
    required: "Required",
    noSpace: "No space",
    email: "Invalid Email",
    tooShort: "Too Short",
    tooLong: "Too Long",
};

const email = Yup.string()
    .trim(copy.required)
    .strict(true)
    .email(copy.email)
    .required(copy.required);

const password = Yup.string()
    .trim(copy.noSpace)
    .strict(true)
    .min(8, "at least 8 characters")
    .max(24, copy.tooLong)
    .required(copy.required);

const title = Yup.string()
    .min(4, copy.tooShort)
    .max(60, copy.tooLong)
    .required(copy.required);

const description = Yup.string().max(500, copy.tooLong);

export const LoginSchema = Yup.object().shape({
    email: email,
    password: password
});

export const LogTimeSchema = Yup.object().shape({
    task: title,
    client_id:Yup.number().required(copy.required),
    comment: description,
    date: Yup.date().required(copy.required),
    from: Yup.date().required(copy.required),
    to: Yup.date().required(copy.required),
});
