import React from 'react';

type FormUpdater<T> = React.Dispatch<React.SetStateAction<T>>;

const handleInputChange = <T extends object>(
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: FormUpdater<T>,
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

export default handleInputChange;
