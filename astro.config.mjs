// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kyverno',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				// {
				// 	label: 'Docs',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Docs',
					collapsed: false,
					autogenerate: { directory: 'docs', collapsed: true },
				},
				// {
				// 	label: 'Installation',
				// 	autogenerate: { directory: 'installation' },
				// },
				// {
				// 	label: 'Applying Policies',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'applying-policies' },
				// },
				// {
				// 	label: 'CRDs',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'CRDs' },
				// },
				// {
				// 	label: 'Exceptions',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'exceptions' },
				// },
				// {
				// 	label: 'CRDs',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'CRDs' },
				// },
				// {
				// 	label: 'High Availability',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'high-availability' },
				// },
				// {
				// 	label: 'Kyverno Chainsaw',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kyverno-chainsaw' },
				// },
				// {
				// 	label: 'Kyverno CLI',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kyverno-cli' },
				// },
				// {
				// 	label: 'Kyverno JSON',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kyverno-json' },
				// },
				// {
				// 	label: 'Kyverno Policy Reporter',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'kyverno-policy-reporter' },
				// },
				// {
				// 	label: 'Monitoring',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'monitoring' },
				// },
				// {
				// 	label: 'Policy Reports',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'policy-reports' },
				// },
				// {
				// 	label: 'policy-types',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'policy-types' },
				// },
				// {
				// 	label: 'Releases',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'releases' },
				// },
				// {
				// 	label: 'Security',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'security' },
				// },
				// {
				// 	label: 'Testing-Policies',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'testing-policies' },
				// },
				// {
				// 	label: 'Tracing',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'tracing' },
				// },
				// {
				// 	label: 'Troubleshooting',
				// 	autogenerate: { directory: 'troubleshooting' },
				// },
			],
		}),
	],
});
