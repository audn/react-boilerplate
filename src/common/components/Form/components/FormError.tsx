function FormError({ label }: { label: string }) {
  if (label) {
    return (
      <span id="form-error" className={'block mb-3 font-bold text-red-500'}>
        {label}
      </span>
    );
  } else return <></>;
}

export default FormError;
