import { type MetaFunction } from '@remix-run/node'
import { Container } from '#app/ui/components/verveui/layout/container.js'
import { A } from '#app/ui/components/verveui/typography/a'
import { Blockquote } from '#app/ui/components/verveui/typography/blockquote'
import { Code } from '#app/ui/components/verveui/typography/code.tsx'
import { Em } from '#app/ui/components/verveui/typography/em'
import { Eyebrow } from '#app/ui/components/verveui/typography/eyebrow'
import { Figcaption } from '#app/ui/components/verveui/typography/figcaption'
import { Figure } from '#app/ui/components/verveui/typography/figure'
import { H1 } from '#app/ui/components/verveui/typography/h1.tsx'
import { H2 } from '#app/ui/components/verveui/typography/h2.tsx'
import { H3 } from '#app/ui/components/verveui/typography/h3'
import { H4 } from '#app/ui/components/verveui/typography/h4'
import { Hr } from '#app/ui/components/verveui/typography/hr'
import { Img } from '#app/ui/components/verveui/typography/img'
import { Lead } from '#app/ui/components/verveui/typography/lead'
import { Ol } from '#app/ui/components/verveui/typography/ol'
import { P } from '#app/ui/components/verveui/typography/p.tsx'
import { Pre } from '#app/ui/components/verveui/typography/pre'
import { Strong } from '#app/ui/components/verveui/typography/strong'
import { Ul } from '#app/ui/components/verveui/typography/ul'

export const meta: MetaFunction = () => {
	return [{ name: 'robots', content: `noindex,nofollow` }]
}

export default function TypographyRoute() {
	return (
		<Container>
			<Eyebrow>Typography</Eyebrow>
			<H1>
				Typography <Em>was</Em> hard
			</H1>
			<Lead>
				Until now, trying to style an article, document, or blog post has been a
				tedious task that required a keen eye for typography and a lot of
				complex custom CSS.
			</Lead>
			<P>
				When building application UIs, it's really useful to remove all the
				default browser styling, including paragraphs, headings, lists, and
				more. This is really useful because you spend no time fighting to undo
				user-agent styles.
			</P>
			<P>
				This also means we need a way to opt into our design system's typography
				styles when we're working with written content.
			</P>
			<P>We have two options.</P>
			<P>
				The nuclear option is to use a <Code>.prose</Code> class that applies
				all of our typography styles to a block of content. This might seem
				great, but it also means that we're back to fighting to undo styles when
				using our components. The only difference is that now we're fighting
				against our own styles instead of the browser's, but the problem
				remains.
			</P>
			<P>
				A better option is to stay in a clean slate state and look at
				typographical elements as components. This way, we can use our
				typographical components to opt into our design systems's typography
				styles without ever having to fight against them.
			</P>
			<P>
				We could add a layer of abstraction over native HTML components and use
				polymorphic components, like <Code>{'<Heading as="h1">'}</Code> or{' '}
				<Code>{'<Text as="p">'}</Code> or we could use{' '}
				<Em>in-place replacement</Em> components, like <Code>{'<H1>'}</Code>,{' '}
				<Code>{'<P>'}</Code>, <Code>{'<Span>'}</Code>, or <Code>{'<Ol>'}</Code>.
			</P>
			<P>
				Either way, we're opting into our design system's typography styles by
				using their corresponding classes <Code>.h1</Code>, <Code>.p</Code>,{' '}
				<Code>.span</Code> or <Code>.ol</Code>, so the difference between these
				two approaches is merelly in the developer experience.
			</P>
			<P>
				It turns out that the second option provides for a better developer
				experience.
			</P>
			<Ul>
				<li>The components are more semantic.</li>
				<li>
					Going from native unstyled HTML to using the full power of our design
					system's typography is as simple as uppercasing the first letter of
					each element, e.g. <Code>{'<h1>'}</Code> to <Code>{'<H1>'}</Code>.
				</li>
				<li>The components are simpler and without black box magic.</li>
			</Ul>
			<P>Some people might ask:</P>
			<Blockquote>
				<P>
					If the components are so simple — all they do is apply a class name —
					why not just use the class name directly?
				</P>
			</Blockquote>
			<P>Good question. Here's why:</P>
			<Ul>
				<li>
					<P>
						<Strong>
							Using component classes as utility classes is a <Em>bad</Em> idea.
						</Strong>
					</P>
					<P>
						Utility classes are atomic, and therefore, reusable. That's what
						keeps the CSS small. If you use component classes like{' '}
						<Code>.p</Code> or <Code>.h1</Code> as if they are utility classes,
						i.e. without being matched to a component, you're back to the old
						Bootstrap days where you wouldn't know if a particular component
						class was being used or not, so you'd be afraid to remove it, and
						the CSS just keeps growing and growing.
					</P>
					<P>
						Component classes should <Em>always</Em> be matched to components.
					</P>
				</li>
				<li>
					<P>
						<Strong>
							Going from native unstyled HTML to using the full power of our
							design system's typography is as simple as uppercasing the first
							letter of each element.
						</Strong>
					</P>
					<P>
						Just replace all <Code>{'<p>'}</Code>’s with <Code>{'<P>'}</Code>’s.
					</P>
				</li>
				<li>
					<P>
						<Strong>The components are more semantic.</Strong>
					</P>
					<P>
						As opposed to more complex components — and the reason we need
						libraries like VerveUI — HTML was primarily designed for text.
						Moving away from HTML's well-designed native typographical elements
						has no intrinsic benefit and makes things like readability,
						maintanability, and SEO harder.
					</P>
				</li>
				<li>
					<P>
						<Strong>The components are less verbose.</Strong>
					</P>
					<Pre>
						<Code>{`<div>
	<p className="p">This is a paragraph.</p>
	<P>This is a paragraph.</P>
</div>`}</Code>
					</Pre>
					<P>The second one is easier to read and write.</P>
					<P className="text-muted-500">
						Keep in mind it's that even though it's hard to differenciate
						between a <Code>p</Code> and a <Code>P</Code> in this code block,
						proper syntax highlighting in your code editor makes that a
						non-issue.
					</P>
				</li>
			</Ul>

			<Hr />
			<H2>What to expect from here on out</H2>
			<P>
				What follows from here is just a bunch of absolute nonsense I've written
				to dogfood the typographical system itself. It includes every sensible
				typographic element I could think of, like <Strong>bold text</Strong>,
				unordered lists, ordered lists, code blocks, block quotes, and even{' '}
				<Em>italics</Em>.
			</P>
			<Blockquote>
				Blockquotes without a <Code>{'<P>'}</Code> tag inside should look good,
				too. But if you want those nice “quote marks” you see on the upper
				blockquote, add one.
			</Blockquote>
			<P>
				Let's slap a <Code>{'<Pre>'}</Code> tag with a <Code>{'<Code>'}</Code>{' '}
				tag inside it to see how that looks.
			</P>
			<Pre>
				<Code>
					{`<article>
	<h1>Garlic bread with cheese: What the science tells us</h1>
	<p>
		For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that
		kids will often dress up as warm, cheesy loaf for Halloween.
	</p>
	<p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
</article>`}
				</Code>
			</Pre>
			<P>
				What if we just want a <Code>{'<Pre>'}</Code> tag without any code?
			</P>
			<Pre>
				{`That looks pretty good, too.
	If you just want
		to have a preformatted block
			of text
				that you want to look nice,
we've got your covered!`}
			</Pre>
			<P>
				What about links? Here's a link to the <A href="/">homepage</A>. That
				looks pretty good, too. We've got a nice distinct gray with an
				underline.
			</P>
			<P>It's important to cover all of these use cases for a few reasons:</P>
			<Ol>
				<li>We want everything to look good out of the box.</li>
				<li>
					Really just the first reason, that's the whole point of the plugin.
				</li>
				<li>
					Here's a third pretend reason though a list with three items looks
					more realistic than a list with two items.
				</li>
			</Ol>
			<P>Now we're going to try out another header style.</P>
			<H3>Typography should be easy</H3>
			<P>
				So that's a header for you — with any luck if we've done our job
				correctly that will look pretty reasonable.
			</P>
			<P>Something a wise person once told me about typography is:</P>
			<Blockquote>
				<P>
					Typography is pretty important if you don't want your stuff to look
					like trash. Make it good then it won't be bad.
				</P>
			</Blockquote>
			<P>
				It's probably important that images look okay here by default as well:
			</P>
			<Figure>
				<Img
					src="/img/alexander-andrews-unsplash.jpg"
					alt="A decorative lettering"
				/>
				<Figcaption>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old.
				</Figcaption>
			</Figure>
			<P>
				Now I'm going to show you an example of an unordered list to make sure
				that looks good, too:
			</P>
			<Ul>
				<li>So here is the first item in this list.</li>
				<li>In this example we're keeping the items short.</li>
				<li>Later, we'll use longer, more complex list items.</li>
			</Ul>
			<P>And that's the end of this section.</P>
			<H2>What if we stack headings?</H2>
			<H3>We should make sure that looks good, too.</H3>
			<P>
				Sometimes you have headings directly underneath each other. In those
				cases you often have to undo the top margin on the second heading
				because it usually looks better for the headings to be closer together
				than a paragraph followed by a heading should be.
			</P>
			<H3>When a heading comes after a paragraph…</H3>
			<P>
				When a heading comes after a paragraph, we need a bit more space, like I
				already mentioned above. Now let's see what a more complex list would
				look like.
			</P>
			<Ul>
				<li>
					<P>
						<Strong>
							I often do this thing where list items have headings.
						</Strong>
					</P>
					<P>
						For some reason I think this looks cool which is unfortunate because
						it's pretty annoying to get the styles right.
					</P>
					<P>
						I often have two or three paragraphs in these list items, too, so
						the hard part is getting the spacing between the paragraphs, list
						item heading, and separate list items to all make sense. Pretty
						tough honestly, you could make a strong argument that you just
						shouldn't write this way.
					</P>
				</li>
				<li>
					<P>
						<Strong>Since this is a list, I need at least two items.</Strong>
					</P>
					<P>
						I explained what I'm doing already in the previous list item, but a
						list wouldn't be a list if it only had one item, and we really want
						this to look realistic. That's why I've added this second list item
						so I actually have something to look at when writing the styles.
					</P>
				</li>
				<li>
					<P>
						<Strong>It's not a bad idea to add a third item either.</Strong>
					</P>
					<P>
						I think it probably would've been fine to just use two items but
						three is definitely not worse, and since I seem to be having no
						trouble making up arbitrary things to type, I might as well include
						it.
					</P>
				</li>
			</Ul>
			<P>
				After this sort of list I usually have a closing statement or paragraph,
				because it kinda looks weird jumping right to a heading.
			</P>
			<H2>Code should look okay by default.</H2>
			<P>
				I think most people are going to use{' '}
				<A href="https://highlightjs.org/">highlight.js</A> or{' '}
				<A href="https://prismjs.com/">Prism</A> or something if they want to
				style their code blocks but it wouldn't hurt to make them look{' '}
				<Em>okay</Em> out of the box, even with no syntax highlighting.
			</P>
			<P>
				Here's what a default <Code>tailwind.config.js</Code> file looks like at
				the time of writing:
			</P>
			<Pre>
				<Code className="language-js">
					{`module.exports = {
	purge: [],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
}`}
				</Code>
			</Pre>
			<P>Hopefully that looks good enough to you.</P>
			<H3>What about nested lists?</H3>
			<P>
				Nested lists basically always look bad which is why editors like Medium
				don't even let you do it, but I guess since some of you goofballs are
				going to do it we have to carry the burden of at least making it work.
			</P>
			<Ol>
				<li>
					<Strong>Nested lists are rarely a good idea.</Strong>
					<Ul>
						<li>
							You might feel like you are being really "organized" or something
							but you are just creating a gross shape on the screen that is hard
							to read.
						</li>
						<li>
							Nested navigation in UIs is a bad idea too, keep things as flat as
							possible.
						</li>
						<li>
							Nesting tons of folders in your source code is also not helpful.
						</li>
					</Ul>
				</li>
				<li>
					<Strong>Since we need to have more items, here's another one.</Strong>
					<Ul>
						<li>
							I'm not sure if we'll bother styling more than two levels deep.
						</li>
						<li>
							Two is already too much, three is guaranteed to be a bad idea.
						</li>
						<li>If you nest four levels deep you belong in prison.</li>
					</Ul>
				</li>
				<li>
					<Strong>Two items isn't really a list, three is good though.</Strong>
					<Ul>
						<li>
							Again please don't nest lists if you want people to actually read
							your content.
						</li>
						<li>Nobody wants to look at this.</li>
						<li>I'm upset that we even have to bother styling this.</li>
					</Ul>
				</li>
			</Ol>
			<P>
				The most annoying thing about lists in Markdown is that{' '}
				<Code>{'<li>'}</Code> elements aren't given a child <Code>{'<P>'}</Code>{' '}
				tag unless there are multiple paragraphs in the list item. That means I
				have to worry about styling that annoying situation too.
			</P>
			<Ul>
				<li>
					<P>
						<Strong>For example, here's another nested list.</Strong>
					</P>
					<P>But this time with a second paragraph.</P>
					<Ul>
						<li>
							These list items won't have <Code>{'<P>'}</Code> tags
						</li>
						<li>Because they are only one line each</li>
					</Ul>
				</li>
				<li>
					<P>
						<Strong>But in this second top-level list item, they will.</Strong>
					</P>
					<P>
						This is especially annoying because of the spacing on this
						paragraph.
					</P>
					<Ul>
						<li>
							<P>
								As you can see here, because I've added a second line, this list
								item now has a <Code>{'<P>'}</Code> tag.
							</P>
							<P>This is the second line I'm talking about by the way.</P>
						</li>
						<li>
							<P>Finally here's another list item so it's more like a list.</P>
						</li>
					</Ul>
				</li>
				<li>
					<P>A closing list item, but with no nested list, because why not?</P>
				</li>
			</Ul>
			<P>And finally a sentence to close off this section.</P>
			<H2>There are other elements we need to style</H2>
			<P>
				I almost forgot to mention links, like{' '}
				<A href="/">this link to the homepage</A>. We almost made them blue but
				that's so yesterday, so we went with light gray, feels edgier.
			</P>
			<P>We even included table styles, check it out:</P>
			<table>
				<thead>
					<tr>
						<th>Wrestler</th>
						<th>Origin</th>
						<th>Finisher</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Bret "The Hitman" Hart</td>
						<td>Calgary, AB</td>
						<td>Sharpshooter</td>
					</tr>
					<tr>
						<td>Stone Cold Steve Austin</td>
						<td>Austin, TX</td>
						<td>Stone Cold Stunner</td>
					</tr>
					<tr>
						<td>Randy Savage</td>
						<td>Sarasota, FL</td>
						<td>Elbow Drop</td>
					</tr>
					<tr>
						<td>Vader</td>
						<td>Boulder, CO</td>
						<td>Vader Bomb</td>
					</tr>
					<tr>
						<td>Razor Ramon</td>
						<td>Chuluota, FL</td>
						<td>Razor's Edge</td>
					</tr>
				</tbody>
			</table>
			<P>
				We also need to make sure inline code looks good, like if I wanted to
				talk about <Code>{'<span>'}</Code> elements or tell you the good news
				about <Code>@verveui</Code>.
			</P>
			<H3>
				Sometimes I even use <Code>code</Code> in headings
			</H3>
			<P>
				Even though it's probably a bad idea, and historically I've had a hard
				time making it look good. This{' '}
				<Em>"wrap the code blocks in a soft background"</Em> trick works pretty
				well though really.
			</P>
			<P>
				Another thing I've done in the past is put a <Code>code</Code> tag
				inside of a link, like if I wanted to tell you about the{' '}
				<A href="/getting-started/">
					<Code>docs</Code>
				</A>
				. Looking pretty great, right?
			</P>
			<H4>
				We haven't used an <Code>h4</Code> yet
			</H4>
			<P>
				But now we have. Please don't use <Code>h5</Code> or <Code>h6</Code> in
				your content, Medium only supports two heading levels for a reason.{' '}
				<Code>h4</Code> elements are already so small that they are (almost?)
				the same size as the body copy. What are we supposed to do with an{' '}
				<Code>h5</Code>, make it <Em>smaller</Em> than the body copy? No thanks.
				So So, given it's a design principle of VerveUI to only have one (good)
				way of doing things, I'm a bit torn on this one. I guess we'll see how
				it goes.
			</P>
			<H3>We still need to think about stacked headings though.</H3>
			<H4>
				Let's make sure we don't screw that up with <Code>h4</Code> elements,
				either.
			</H4>
			<P>
				Phew, with any luck we have styled the headings above this text and they
				look pretty good.
			</P>
			<P>
				Let's add a closing paragraph here so things end with a decently sized
				block of text. I can't explain why I want things to end that way but I
				have to assume it's because I think things will look weird or unbalanced
				if there is a heading too close to the end of the document.
			</P>
			<P>
				What I've written here is probably long enough, but adding this final
				sentence can't hurt.
			</P>
		</Container>
	)
}
