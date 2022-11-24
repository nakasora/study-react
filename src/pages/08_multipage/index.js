import { useRouter } from "next/router";
export default function MultiPage() {
  const router = useRouter();
  const step = router.query.step ?? 0;

  const goToStep = (_step, asPath) => {
    router.push(`/08_multipage?step=${_step}`, asPath)
  }
  return (
    <div>
      {step == 0 && (
        <>
          <h3>step: {step}</h3>
          <button onClick={() => goToStep(1, '/personal')}>next step</button>
        </>
      )}
      {step == 1 && (
        <>
          <h3>step: {step}</h3>
          <button onClick={() => goToStep(2, '/confirm')}>next step</button>
        </>
      )}
      {step == 2 && (
        <>
          <h3>step: {step}</h3>
          <button onClick={() => goToStep(0, '/08_multipage')}>next step</button>
        </>
      )}
    </div>
  );
}
