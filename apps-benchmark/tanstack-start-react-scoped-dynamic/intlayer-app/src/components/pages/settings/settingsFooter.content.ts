import { type Dictionary, t } from 'intlayer';

const settingsFooterContent = {
  key: 'settings-footer',
  content: {
    saveChanges: t({
      en: "Save Changes",
      fr: "Enregistrer les modifications",
      es: "Guardar cambios",
      de: "Änderungen speichern",
      it: "Salva modifiche",
      pt: "Salvar alterações",
      zh: "保存更改",
      ja: "変更を保存",
      ko: "변경 사항 저장",
      ru: "Сохранить изменения",
    }),

    cancel: t({
      en: "Cancel",
      fr: "Annuler",
      es: "Cancelar",
      de: "Abbrechen",
      it: "Annulla",
      pt: "Cancelar",
      zh: "取消",
      ja: "キャンセル",
      ko: "취소",
      ru: "Отмена",
    })
  },
} satisfies Dictionary;

export default settingsFooterContent;
