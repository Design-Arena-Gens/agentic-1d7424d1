'use client';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button type="button" onClick={handlePrint} aria-label="Imprimer le document">
      Imprimer
    </button>
  );
}
