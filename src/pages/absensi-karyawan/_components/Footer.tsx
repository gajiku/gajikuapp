import { HiOutlineCheck } from 'react-icons/hi';

export default function Footer() {
  return (
    <div className="bg-gray-50 py-16 -mb-20">
      <section className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-slate-700 text-4xl font-extrabold mb-4">Fitur Lainnya</h2>
            <p>
              Manajemen pengajuan Gajiku memiliki fitur yang komprehensif dan memudahkan untuk kebutuhan bisnis dan
              semua proses absensi.
            </p>
          </div>
          <ul className="grid gap-2">
            <li className="flex gap-2">
              <HiOutlineCheck size={20} className="text-success relative top-0.5" />
              Semua pengajuan & approval melalui aplikasi karyawan
            </li>
            <li className="flex gap-2">
              <HiOutlineCheck size={20} className="text-success relative top-0.5" />
              Cuti setengah hari/jam, cuti pengganti bisa dibuat
            </li>
            <li className="flex gap-2">
              <HiOutlineCheck size={20} className="text-success relative top-0.5" />
              Integrasi dengan penggajian Gajiku
            </li>
            <li className="flex gap-2">
              <HiOutlineCheck size={20} className="text-success relative top-0.5" />
              Perhitungan bisa dengan aturan pemerintah ataupun custom
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
