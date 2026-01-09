import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const TELEGRAM_BOT_TOKEN = '8133046089:AAHMluVHa4eFrMSfOaq1jIUVrWGGXSb06yc';
    const TELEGRAM_CHAT_ID = '6687531628';

    const text = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      });

      if (response.ok) {
        toast.success(t('contact.form.success'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.message')}
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send size={20} className="mr-2" />
                    {isSubmitting ? 'Sending...' : t('contact.form.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">{t('contact.info.email')}</h4>
                    <a href="mailto:pragramist0001@gmail.com" className="text-gray-600 hover:text-blue-600">
                      pragramist0001@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">{t('contact.info.phone')}</h4>
                    <a href="tel:+998995824787" className="text-gray-600 hover:text-green-600">
                      +998 99 582 47 87
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1">{t('contact.info.location')}</h4>
                    <p className="text-gray-600">
                      Termiz, Surxandaryo<br />
                      O'zbekiston
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
