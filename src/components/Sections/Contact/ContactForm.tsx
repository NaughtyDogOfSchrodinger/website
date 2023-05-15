import {useRouter} from 'next/router';
import {FC, memo, useCallback, useMemo, useState} from 'react';

export interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const router = useRouter();
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
      phone: '',
      company: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */

      await fetch(`/api/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          router.reload();
        })
        .catch(() => router.reload());
    },
    [data, router],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="姓名" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="phone"
        onChange={onChange}
        placeholder="手机号"
        required
        type="tel"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="邮箱"
        required
        type="email"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="company"
        onChange={onChange}
        placeholder="公司名称"
        required
        type="text"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="留言"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        提交
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
