import { DefaultLayout } from '@/components/layouts/general.layout';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export default function Home() {
  const top = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const RenderQuestions = () => {
    return (
      <ol className="list-decimal list-inside p-4 md:p-0 text-sm">
        {questions.map((q, i) => {
          return (
            <li
              className={classNames({
                'font-bold': selected === i,
                'mb-4': i !== questions.length - 1,
              })}
              key={`faq-${i}`}
            >
              <span
                className="cursor-pointer"
                onClick={() => {
                  setExpand(false);
                  setSelected(i);
                }}
              >
                {q}
              </span>
            </li>
          );
        })}
      </ol>
    );
  };

  useEffect(() => {
    if (top.current) {
      const elementPosition = top.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [selected]);

  return (
    <DefaultLayout className="md:pb-0">
      <Head>
        <title>Gajiku - FAQ</title>
        <meta name="description" content="Frequently Asked Question" />
      </Head>

      <section ref={top}>
        <div className="flex flex-col md:flex-row">
          <div className="self-start md:border-r md:border-gray-300 p-4 md:pb-20 sticky top-20 md:top-7 md:w-[25%]">
            <div className="md:hidden">
              <div
                className={classNames(
                  'border border-gray-300 bg-white cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg',
                  {
                    'rounded-b-none': expand,
                  },
                )}
                onClick={() => setExpand(!expand)}
              >
                <span className="font-bold text-primary text-sm">Frequently Asked Question</span>
                {expand ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
              </div>
              <div
                className={classNames(
                  'border border-gray-300 bg-white rounded-b-lg transition-all ease-in-out duration-150',
                  {
                    'h-0 opacity-0': !expand,
                    'h-full opacity-100': expand,
                  },
                )}
              >
                {RenderQuestions()}
              </div>
            </div>
            <div className="hidden md:block">
              <p className="font-bold mb-4 text-primary">Frequently Asked Question</p>
              {RenderQuestions()}
            </div>
          </div>
          <div className="px-6 md:p-8 md:pb-20 text-sm md:w-[75%]">
            <p className="font-bold my-4 text-lg">{questions[selected]}</p>
            {answers[selected]()}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

const questions = [
  'Bagaimana cara saya mendaftar ke aplikasi Gajiku?',
  'Bagaimana cara login ke aplikasi Gajiku?',
  'Bagaimana jika saya lupa kata sandi?',
  'Mengapa saya tidak bisa melakukan penarikan EWA?',
  'Bagaimana cara menarik dana EWA?',
  'Berapa lama dana akan cair ke rekening Saya?',
  'Apa arti dari status Approval di aplikasi?',
  'Bisakah saya membatalkan transaksi yang sudah diajukan?',
  'Bagaimana jika saya ingin mengubah data pribadi (nomor rekening, nomor HP, dll)?',
  'Bagaimana cara reset PIN di aplikasi Gajiku?',
  'Bisakah CS Gajiku membantu saya  menghubungi perusahaan?',
];

const answers = [
  () => (
    <>
      <p className="my-4">
        Pendaftaran dilakukan melalui perusahaan Anda. Mohon hubungi pihak perusahaan untuk mendaftarkan data diri Anda
        agar bisa mengakses aplikasi. Pastikan Anda menyiapkan dokumen/data berikut:
      </p>
      <ol className="list-decimal list-inside">
        <li>KTP (Nomor dan Nama sesuai KTP)</li>
        <li>Nomor ID Karyawan yang valid</li>
        <li>Nomor Handphone yang aktif</li>
        <li>Nama Jabatan</li>
        <li>Nama Bank dan Nomor Rekening</li>
        <li>Alamat Rumah</li>
      </ol>
    </>
  ),
  () => (
    <>
      <p className="my-4">Pastikan Anda sudah terdaftar di sistem perusahaan, lalu ikuti langkah ini:</p>
      <ol className="grid gap-8 list-decimal list-outside ml-4 md:ml-8">
        <li>
          <span>Download aplikasi Gajiku (Android/IOS).</span>
          <div className="flex gap-4 md:ml-4 mt-4">
            <a href="https://apps.apple.com/id/app/gajiku/id6444016967" target="_blank">
              <Image
                className="object-contain w-fit"
                src="https://storage.googleapis.com/gajiku-assets/faq/faq-app-store.png"
                width={400}
                height={120}
                alt="get-from-app-store"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.gajiku.app" target="_blank">
              <Image
                className="object-contain w-fit"
                src="https://storage.googleapis.com/gajiku-assets/faq/faq-google-play.png"
                width={400}
                height={120}
                alt="get-from-google-play"
              />
            </a>
          </div>
        </li>
        <li>
          Buka aplikasi. Di halaman login, klik Dapatkan Akses.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-get-access.png"
            width={640}
            height={1000}
            alt="login-instruction-1"
          />
        </li>
        <li>
          Masukkan nomor HP Anda dan klik lanjut. Pastikan nomor HP yang dimasukkan sesuai dengan nomor HP yang
          terdaftar di sistem perusahaan.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-insert-phone.png"
            width={640}
            height={1000}
            alt="login-instruction-2"
          />
        </li>
        <li>
          Sistem akan mengirimkan kode OTP melalui SMS ke nomor HP yang dimasukkan. Pastikan sinyal anda aman agar SMS
          kode OTP masuk. Masukkan kode OTP yang anda terima via SMS lalu klik lanjut.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-get-otp.png"
            width={640}
            height={1000}
            alt="login-instruction-3"
          />
        </li>
        <li>
          Buat kata sandi baru.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-create-password.png"
            width={640}
            height={1000}
            alt="login-instruction-4"
          />
        </li>
        <li>Login kembali menggunakan nomor HP dan kata sandi yang telah dibuat.</li>
      </ol>
    </>
  ),
  () => (
    <>
      <p className="my-4">Anda bisa melakukan reset mandiri di aplikasi:</p>
      <ol className="grid gap-8 list-decimal list-outside ml-4 md:ml-8">
        <li>
          Buka aplikasi. Di halaman login, klik Lupa Password.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-forgot-password.png"
            width={640}
            height={1000}
            alt="forgot-password-instruction-1"
          />
        </li>
        <li>
          Masukkan nomor HP Anda dan klik lanjut. Pastikan nomor HP yang dimasukkan sesuai dengan nomor HP yang
          terdaftar di sistem perusahaan.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-insert-phone.png"
            width={640}
            height={1000}
            alt="forgot-password-instruction-2"
          />
        </li>
        <li>
          Sistem akan mengirimkan kode OTP melalui SMS ke nomor HP yang dimasukkan. Pastikan sinyal anda aman agar SMS
          kode OTP masuk. Masukkan kode OTP yang anda terima via SMS lalu klik lanjut.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-get-otp.png"
            width={640}
            height={1000}
            alt="forgot-password-instruction-3"
          />
        </li>
        <li>
          Buat kata sandi baru.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-create-password.png"
            width={640}
            height={1000}
            alt="forgot-password-instruction-4"
          />
        </li>
        <li>Login kembali menggunakan nomor HP dan kata sandi yang telah dibuat.</li>
      </ol>
    </>
  ),
  () => (
    <>
      <p className="my-4">Silakan cek status di aplikasi Anda. Penarikan tidak bisa dilakukan jika:</p>
      <ul className="grid gap-8 list-disc list-outside ml-8">
        <li>
          Saldo EWA Anda kosong.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa1.png"
            width={640}
            height={10000}
            alt="ewa-info-1"
          />
        </li>
        <li>
          Muncul keterangan "Fitur tarik gaji muka tidak aktif untuk akun Anda" (hubungi perusahaan untuk mengaktifkan
          kembali).
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa2.png"
            width={640}
            height={1000}
            alt="ewa-info-2"
          />
        </li>
        <li>
          Muncul keterangan "Dalam periode blackout" (periode penarikan sedang ditutup oleh perusahaan).
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa3.png"
            width={640}
            height={1000}
            alt="ewa-info-3"
          />
        </li>
        <li>
          Muncul keterangan "Harap masukkan akun bank Anda". Harap hubungi perusahaan agar data rekening Anda dimasukkan
          ke sistem perusahaan.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa4.png"
            width={640}
            height={1000}
            alt="ewa-info-4"
          />
        </li>
      </ul>
    </>
  ),
  () => (
    <>
      <ol className="grid gap-8 list-decimal list-outside ml-4 md:ml-8">
        <li>
          Di halaman beranda, masukkan nilai EWA yang ingin diambil lalu klik Tarik Saldo.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa-withdrawal1.png"
            width={640}
            height={1000}
            alt="ewa-withdrawal-instruction-1"
          />
        </li>
        <li>
          Klik konfirmasi.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa-withdrawal2.png"
            width={640}
            height={1000}
            alt="ewa-withdrawal-instruction-2"
          />
        </li>
        <li>
          Setelahnya akan muncul halaman sukses pengajuan.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa-withdrawal3.png"
            width={640}
            height={1000}
            alt="ewa-withdrawal-instruction-3"
          />
        </li>
        <li>
          Anda bisa memantau status pengajuan di menu Riwayat.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-ewa-withdrawal4.png"
            width={640}
            height={1000}
            alt="ewa-withdrawal-instruction-4"
          />
        </li>
      </ol>
    </>
  ),
  () => (
    <>
      <p className="my-4">
        Pencairan dilakukan secara real-time dengan batas maksimal 1x24 jam setelah disetujui perusahaan. Jika lebih
        dari 1x24 jam, jangan khawatir, selama status pengajuan Anda sudah disetujui (Aproval 1/1 atau Auto-approve),
        dana akan tetap diproses.
      </p>
    </>
  ),
  () => (
    <>
      <ul className="grid gap-8 list-disc list-outside ml-4 md:ml-8">
        <li>
          Level (0/1): Pengajuan belum disetujui oleh perusahaan.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-approval-status1.png"
            width={640}
            height={1000}
            alt="status-info-1"
          />
        </li>
        <li>
          Level (1/1): Pengajuan sudah disetujui.
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-approval-status2.png"
            width={640}
            height={1000}
            alt="status-info-2"
          />
        </li>
        <li>
          Tanda X: Pengajuan ditolak oleh perusahaan (Anda bisa membuat pengajuan ulang).
          <Image
            className="border border-gray-100 md:ml-4 mt-4 object-contain w-fit"
            src="https://storage.googleapis.com/gajiku-assets/faq/faq-approval-status3.png"
            width={640}
            height={1000}
            alt="status-info-3"
          />
        </li>
        <li>Tidak ada Approval Level: Disetujui secara otomatis oleh sistem perusahaan.</li>
      </ul>
    </>
  ),
  () => (
    <>
      <p className="my-4">
        Gajiku tidak dapat membatalkan transaksi secara sepihak. Jika Anda ingin melakukan pembatalan, mohon hubungi
        pihak perusahaan Anda.
      </p>
    </>
  ),
  () => (
    <>
      <p className="my-4">
        Seluruh perubahan data karyawan hanya dapat dilakukan oleh pihak perusahaan. Anda dapat mengecek siapa
        penanggung jawab perusahaan melalui menu Profil {`>`} Ketenagakerjaan atau melihatnya di kolom Approval Level
        pada detail transaksi Anda.
      </p>
    </>
  ),
  () => (
    <>
      <p className="my-4">
        Khusus untuk reset PIN, silakan kirimkan permintaan ke WhatsApp CS Gajiku dengan melampirkan:
      </p>
      <ol className="list-decimal list-inside">
        <li>Nama Karyawan, No. ID Perusahaan, No. HP, dan No. KTP.</li>
        <li>Foto KTP Anda.</li>
      </ol>
    </>
  ),
  () => (
    <>
      <p className="my-4">
        Mohon maaf, CS Gajiku tidak memiliki akses untuk menghubungi perusahaan Anda. Jika Anda karyawan vendor, mohon
        koordinasikan kendala Anda dengan atasan atau pihak terkait di perusahaan Anda.
      </p>
    </>
  ),
];
