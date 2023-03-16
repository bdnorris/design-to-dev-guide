declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"concepts": {
"accessibility.md": {
  id: "accessibility.md",
  slug: "accessibility",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
"animation.md": {
  id: "animation.md",
  slug: "animation",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
"clickability-affordance.md": {
  id: "clickability-affordance.md",
  slug: "clickability-affordance",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
"client.md": {
  id: "client.md",
  slug: "client",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
"design-systems.md": {
  id: "design-systems.md",
  slug: "design-systems",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
"responsive-design.md": {
  id: "responsive-design.md",
  slug: "responsive-design",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
"typography.md": {
  id: "typography.md",
  slug: "typography",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
"workflow.md": {
  id: "workflow.md",
  slug: "workflow",
  body: string,
  collection: "concepts",
  data: any
} & { render(): Render[".md"] },
},
"intro": {
"intro.md": {
  id: "intro.md",
  slug: "intro",
  body: string,
  collection: "intro",
  data: any
} & { render(): Render[".md"] },
},
"tips": {
"digital-assets.md": {
  id: "digital-assets.md",
  slug: "digital-assets",
  body: string,
  collection: "tips",
  data: any
} & { render(): Render[".md"] },
"dos-and-donts.md": {
  id: "dos-and-donts.md",
  slug: "dos-and-donts",
  body: string,
  collection: "tips",
  data: any
} & { render(): Render[".md"] },
"forms.md": {
  id: "forms.md",
  slug: "forms",
  body: string,
  collection: "tips",
  data: any
} & { render(): Render[".md"] },
"images.md": {
  id: "images.md",
  slug: "images",
  body: string,
  collection: "tips",
  data: any
} & { render(): Render[".md"] },
"layout.md": {
  id: "layout.md",
  slug: "layout",
  body: string,
  collection: "tips",
  data: any
} & { render(): Render[".md"] },
"navigation.md": {
  id: "navigation.md",
  slug: "navigation",
  body: string,
  collection: "tips",
  data: any
} & { render(): Render[".md"] },
"performance.md": {
  id: "performance.md",
  slug: "performance",
  body: string,
  collection: "tips",
  data: any
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = never;
}
