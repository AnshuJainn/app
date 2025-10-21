import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from './ui/command';
import { portfolioData } from '../mockData';
import { Home, Layers, Layout, Newspaper, Mail, Github, Linkedin, FileDown, Link as LinkIcon, Search } from 'lucide-react';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const GlobalCommandMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setOpen]);

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // ignore
    }
  };

  const base = location.pathname.replace(/^\//, '');
  const currentTab = query.get('tab') || 'story';

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search actions, pages, sections..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => go('/')}> 
            <Home className="mr-2" /> Home
            <CommandShortcut>G H</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => go('/version1')}>
            <Layout className="mr-2" /> Version 1 (Minimalist)
          </CommandItem>
          <CommandItem onSelect={() => go('/version2')}>
            <Layers className="mr-2" /> Version 2 (Dynamic)
          </CommandItem>
          <CommandItem onSelect={() => go('/resume')}>
            <Newspaper className="mr-2" /> Resume (Print View)
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Sections">
          <CommandItem onSelect={() => go(`/${base}?tab=story`)}>
            <Search className="mr-2" /> Story
          </CommandItem>
          <CommandItem onSelect={() => go(`/${base}?tab=experience`)}>
            <Search className="mr-2" /> Experience
          </CommandItem>
          <CommandItem onSelect={() => go(`/${base}?tab=projects`)}>
            <Search className="mr-2" /> Projects
          </CommandItem>
          <CommandItem onSelect={() => go(`/${base}?tab=contact`)}>
            <Search className="mr-2" /> Contact
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => { go(`/resume`); setTimeout(() => window.print(), 300); }}>
            <FileDown className="mr-2" /> Download Resume (Print to PDF)
          </CommandItem>
          <CommandItem onSelect={() => window.open(`mailto:${portfolioData.email}`, '_self')}>
            <Mail className="mr-2" /> Email Me
          </CommandItem>
          <CommandItem onSelect={() => window.open(`https://${portfolioData.linkedin}`, '_blank')}>
            <Linkedin className="mr-2" /> Open LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => window.open(`https://${portfolioData.github}`, '_blank')}>
            <Github className="mr-2" /> Open GitHub
          </CommandItem>
          <CommandItem onSelect={() => copyToClipboard(window.location.href)}>
            <LinkIcon className="mr-2" /> Copy page link
          </CommandItem>
          <CommandItem onSelect={() => copyToClipboard(`${window.location.origin}${window.location.pathname}${window.location.hash.split('?')[0]}?tab=${currentTab}`)}>
            <LinkIcon className="mr-2" /> Copy link to current section
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default GlobalCommandMenu;
