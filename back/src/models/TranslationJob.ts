import { InferSchemaType, Model, Schema, model, models } from "mongoose";

const translationJobSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    originalFileName: {
      type: String,
      required: true,
      trim: true,
    },
    originalFileUrl: {
      type: String,
      required: true,
      trim: true,
    },
    sourceLanguage: {
      type: String,
      default: "auto",
      trim: true,
    },
    targetLanguage: {
      type: String,
      required: true,
      trim: true,
    },
    sourceText: {
      type: String,
      default: "",
      trim: true,
    },
    translationNote: {
      type: String,
      default: "",
      trim: true,
    },
    aiTranslatedFileUrl: {
      type: String,
      default: null,
      trim: true,
    },
    translatedText: {
      type: String,
      default: null,
      trim: true,
    },
    reviewedFileUrl: {
      type: String,
      default: null,
      trim: true,
    },
    status: {
      type: String,
      enum: [
        "uploaded",
        "translating",
        "translated",
        "review_requested",
        "reviewed",
      ],
      default: "uploaded",
    },
    reviewRequested: {
      type: Boolean,
      default: false,
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    adminNote: {
      type: String,
      default: "",
      trim: true,
    },
    watermarked: {
      type: Boolean,
      default: false,
    },
    signature: {
      type: String,
      default: "",
      trim: true,
    },
    signatureSvgUrl: {
      type: String,
      default: null,
      trim: true,
    },
    signatureSvgData: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export type TranslationJobDocument = InferSchemaType<typeof translationJobSchema>;

type TranslationJobModel = Model<TranslationJobDocument>;

const TranslationJob =
  (models.TranslationJob as TranslationJobModel | undefined) ||
  model<TranslationJobDocument, TranslationJobModel>(
    "TranslationJob",
    translationJobSchema,
  );

export default TranslationJob;
