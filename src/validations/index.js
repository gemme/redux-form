export const required = value => {
    return value
    ? null
    : 'Value is required';
};

export const minLength =  value => {
    return value.length < 4
    ? 'Value must be at least 4'
    : null;
};

export const maxLength = value => {
    return value.length > 10
    ? 'Value is too long'
    : null;
};

export const matchesPassword = (value, allValues) => {
    return value === allValues.password
        ? null
        : 'Passwords must match';
};